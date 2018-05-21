package com.example.myapp.services;

import com.example.myapp.model.Lesson;
import com.example.myapp.model.Module;
import com.example.myapp.repositories.CourseRepository;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {
    @Autowired
    ModuleRepository moduleRepository;

    @Autowired
    LessonRepository lessonRepository;

    @GetMapping("/api/module{moduleId}/lesson")
    public List<Lesson> findAllLessonsForModule(@PathVariable("moduleId") int moduleId) {
        Optional<Module> data = moduleRepository.findById(moduleId);
        if(data.isPresent()) {
            Module module = data.get();
            return module.getLesson();
        }
        return null;
    }

}
