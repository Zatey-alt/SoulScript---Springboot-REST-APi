package com.example.diaryapp.service;

import com.example.diaryapp.model.DiaryEntry;
import com.example.diaryapp.repository.DiaryEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaryEntryService {

    @Autowired
    private DiaryEntryRepository diaryEntryRepository;

    public List<DiaryEntry> getEntriesByUsername(String username) {
        return diaryEntryRepository.findByUsername(username);
    }

    public DiaryEntry saveEntry(DiaryEntry entry) {
        return diaryEntryRepository.save(entry);
    }

    public void deleteEntry(Long id) {
        diaryEntryRepository.deleteById(id);
    }
}