package com.example.myapp.services;

import com.example.myapp.model.Lesson;
import com.example.myapp.model.Module;
import com.example.myapp.repositories.CourseRepository;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {
    @Autowired
    ModuleRepository moduleRepository;

    @Autowired
    LessonRepository lessonRepository;

    @GetMapping("/api/module/{moduleId}/lesson")
    public List<Lesson> findAllLessonsForModule(@PathVariable("moduleId") int moduleId) {
        Optional<Module> data = moduleRepository.findById(moduleId);
        if(data.isPresent()) {
            Module module = data.get();
            return module.getLesson();
        }
        return new ArrayList<Lesson>();
    }

    @PostMapping("/api/module/{moduleId}/lesson")
    public void addLesson(@PathVariable("moduleId") int moduleId, @RequestBody Lesson lesson){
        System.out.println(lesson.getTitle());
        //Optional<Module> data = moduleRepository.findById(moduleId);
        //System.out.println(data);
        if(     moduleRepository.findById(moduleId).isPresent()) {
                Module module = moduleRepository.findById(moduleId).get();
            lesson.setModule(module);
            lessonRepository.save(lesson);
        }

    }

    @DeleteMapping("/api/module/{moduleId}/lesson/{lessonId}")
    public void deleteLesson(@PathVariable("moduleId") int moduleId, @PathVariable("lessonId") int lessonId) {
        lessonRepository.deleteById(lessonId);
    }

}
