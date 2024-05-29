package com.example.diaryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.diaryapp.model.DiaryEntry;
import java.util.List;

public interface DiaryEntryRepository extends JpaRepository<DiaryEntry, Long> {
    List<DiaryEntry> findByUsername(String username);
}