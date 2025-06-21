package com.example.backend.controller;

import com.example.backend.model.GalleryItem;
import com.example.backend.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {

    @Autowired
    private GalleryService galleryService;

    @GetMapping
    public ResponseEntity<List<GalleryItem>> getAllGalleryItems() {
        List<GalleryItem> items = galleryService.getAllGalleryItems();
        return ResponseEntity.ok(items);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GalleryItem> getGalleryItemById(@PathVariable Long id) {
        GalleryItem item = galleryService.getGalleryItemById(id)
                .orElseThrow(() -> new RuntimeException("Gallery item not found with id: " + id));
        return ResponseEntity.ok(item);
    }

    @PostMapping
    public ResponseEntity<GalleryItem> createGalleryItem(@RequestBody GalleryItem galleryItem) {
        GalleryItem createdItem = galleryService.createGalleryItem(galleryItem);
        return ResponseEntity.status(201).body(createdItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GalleryItem> updateGalleryItem(@PathVariable Long id, @RequestBody GalleryItem galleryItem) {
        GalleryItem updatedItem = galleryService.updateGalleryItem(id, galleryItem);
        return ResponseEntity.ok(updatedItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGalleryItem(@PathVariable Long id) {
        galleryService.deleteGalleryItem(id);
        return ResponseEntity.noContent().build();
    }
}