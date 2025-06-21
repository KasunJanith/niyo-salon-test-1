package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.GalleryItem;
import com.example.backend.repository.GalleryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class GalleryService {

    @Autowired
    private GalleryRepository galleryRepository;

    public List<GalleryItem> getAllGalleryItems() {
        return galleryRepository.findAll();
    }

    public Optional<GalleryItem> getGalleryItemById(Long id) {
        return galleryRepository.findById(id);
    }

    public GalleryItem createGalleryItem(GalleryItem galleryItem) {
        return galleryRepository.save(galleryItem);
    }

    public GalleryItem updateGalleryItem(Long id, GalleryItem galleryItem) {
        if (galleryRepository.existsById(id)) {
            galleryItem.setId(id);
            return galleryRepository.save(galleryItem);
        }
        return null;
    }

    public void deleteGalleryItem(Long id) {
        galleryRepository.deleteById(id);
    }
}