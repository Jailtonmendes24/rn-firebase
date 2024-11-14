import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Post } from '../types/post';

export function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <Text style={styles.userName}>{post.userName}</Text>
      </View>
      
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      
      <View style={styles.footer}>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="comment-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{post.likes} curtidas</Text>
        <Text style={styles.content}>
          <Text style={styles.userName}>{post.userName}</Text> {post.content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  footer: {
    padding: 10,
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  actionButton: {
    marginRight: 15,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    lineHeight: 18,
  },
}); 