import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import { Post } from '../types/post';

export const postService = {
  async createPost(content: string, imageUrl?: string) {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('Usuário não autenticado');

      const postData = {
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0] || 'Usuário',
        userAvatar: user.photoURL,
        content,
        imageUrl,
        likes: 0,
        comments: 0,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'posts'), postData);
      return docRef.id;
    } catch (error) {
      console.error('Erro ao criar post:', error);
      throw error;
    }
  },

  async getPosts() {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Post[];
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      throw error;
    }
  }
}; 