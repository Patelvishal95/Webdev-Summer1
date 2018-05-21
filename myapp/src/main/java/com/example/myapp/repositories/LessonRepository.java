package com.example.myapp.repositories;

import com.example.myapp.model.Lesson;
import org.springframework.data.repository.CrudRepository;

public interface LessonRepository extends CrudRepository<Lesson,Integer> {
}
