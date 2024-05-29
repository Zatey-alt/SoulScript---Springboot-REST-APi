package com.example.diaryapp.controller;

import com.example.diaryapp.model.DiaryEntry;
import com.example.diaryapp.repository.DiaryEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diary")
public class DiaryEntryController {

    @Autowired
    private DiaryEntryRepository diaryEntryRepository;

    @PostMapping
    public DiaryEntry createEntry(@RequestBody DiaryEntry entry, Authentication authentication) {
        entry.setUsername(authentication.getName());
        return diaryEntryRepository.save(entry);
    }

    @PutMapping("/{id}")
    public DiaryEntry updateEntry(@PathVariable Long id, @RequestBody DiaryEntry entry, Authentication authentication) {
        entry.setId(id);
        entry.setUsername(authentication.getName());
        return diaryEntryRepository.save(entry);
    }

    @GetMapping
    public List<DiaryEntry> getEntries(Authentication authentication) {
        return diaryEntryRepository.findByUsername(authentication.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable Long id) {
        diaryEntryRepository.deleteById(id);
    }
}
