package com.example.myapp.repositories;

import com.example.myapp.model.Course;
import org.springframework.data.repository.CrudRepository;



public interface CourseRepository extends CrudRepository<Course, Integer> {

}