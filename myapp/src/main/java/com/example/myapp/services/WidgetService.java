package com.example.myapp.services;

import com.example.myapp.model.Course;
import com.example.myapp.model.Widget;
import com.example.myapp.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
@RequestMapping("/api/widget")
public class WidgetService {
    @Autowired
    WidgetRepository widgetRepository;

    @GetMapping()
    public Iterable<Widget> getAllWidget()
    {
        System.out.println("in get all widget");
        return widgetRepository.findAll();
    }
    @PostMapping()
    public void AddWidgets(@RequestBody List<Widget> widgets){
        widgetRepository.deleteAll();
        for(Widget widget:widgets){
            widgetRepository.save(widget);
        }

    }
}
