package com.example.myapp.services;

import com.example.myapp.model.Course;
import com.example.myapp.model.User;
import com.example.myapp.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000",maxAge = 3600)
@RequestMapping("/api/course")
public class CourseServices {
    @Autowired
    CourseRepository courseRepository;
    @GetMapping()
    public Iterable<Course> findAllCourses() {
        return courseRepository.findAll();
    }
    @PostMapping()

    public Course addCourse(@RequestBody Course course){
        return courseRepository.save(course);
    }
    @DeleteMapping("/{Id}")
    public void delete(@PathVariable("Id")int Id){
        courseRepository.deleteById(Id);
    }

    @GetMapping("/{courseId}")
    public Course findCourseById(@PathVariable("courseId")int Id){
        Optional<Course> data = courseRepository.findById(Id);
        if(data.isPresent()) {
            Course course = data.get();
        return course;
        }
        else {
            return new Course();
        }
    }

}
