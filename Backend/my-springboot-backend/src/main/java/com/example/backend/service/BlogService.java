package com.example.backend.service;

import com.example.backend.model.BlogPost;
import com.example.backend.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<BlogPost> getAllBlogPosts() {
        return blogRepository.findAll();
    }

    public Optional<BlogPost> getBlogPostById(Long id) {
        return blogRepository.findById(id);
    }

    public BlogPost createBlogPost(BlogPost blogPost) {
        return blogRepository.save(blogPost);
    }

    public BlogPost updateBlogPost(Long id, BlogPost blogPost) {
        blogPost.setId(id);
        return blogRepository.save(blogPost);
    }

    public void deleteBlogPost(Long id) {
        blogRepository.deleteById(id);
    }
}