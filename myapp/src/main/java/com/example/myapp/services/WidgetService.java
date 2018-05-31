package com.example.myapp.services;

import com.example.myapp.model.Course;
import com.example.myapp.model.Lesson;
import com.example.myapp.model.Widget;
import com.example.myapp.repositories.LessonRepository;
import com.example.myapp.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
//@RequestMapping("/api/widget")
public class WidgetService {
    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    LessonRepository lessonRepository;
    @GetMapping("/api/widget")
    public Iterable<Widget> getAllWidget()
    {
        return widgetRepository.findAll();
    }

    @GetMapping("/api/widget/{widgetId}")
    public Widget getWidgetById(@PathVariable("widgetId")int widgetId){
        Optional<Widget> widget =  widgetRepository.findById(widgetId);
        if(widget.isPresent()){
            return widget.get();
        }
        else return null;
    }
    @GetMapping("/api/lesson/{lessonId}/widget")
    public Iterable<Widget> getAllWidgetByLessonId(@PathVariable("lessonId")int lessonId)
    {
        System.out.println("in get Widgets by id");
        Optional<Lesson> data = lessonRepository.findById(lessonId);
        if(data.isPresent()) {
            System.out.println("Got all widgets");

            Lesson lesson = data.get();
            System.out.println(lesson.getWidgets());
            return lesson.getWidgets();

        }
        else {
            return new ArrayList<Widget>() ;
        }
    }
    @PostMapping("/api/lesson/{lessonId}/widget")
    public void AddWidgets(@PathVariable("lessonId")int lessonId,@RequestBody List<Widget> widgets){
        Optional<Lesson> data= lessonRepository.findById(lessonId);
        Lesson lesson = null;
        if(data.isPresent()){
            lesson=data.get();
        }
        List<Widget> w =lesson.getWidgets();
        for(Widget widget:w){
            widgetRepository.deleteById(widget.getId());
        }
        for(Widget widget:widgets){
        widget.setLesson(lesson);
        widgetRepository.save(widget);
        }
        lesson.setWidgets(widgets);
    }
    @PostMapping("/api/widget/{widgetId}")
    public void UpdateWidget(@PathVariable("widgetId")int widgetId,@RequestBody Widget w){
        Optional<Widget> widgetoptional= widgetRepository.findById(widgetId);
        if(widgetoptional.isPresent()){
            Widget widget = widgetoptional.get();
            widget.setLesson(w.getLesson());
            widget.setClassName(w.getClassName());
            widget.setId(w.getId());
            widget.setHref(w.getHref());
            widget.setListItems(w.getListItems());
            widget.setListType(w.getListType());
            widget.setName(w.getName());
            widget.setOrder1(w.getOrder1());
            widget.setSize(w.getSize());
            widget.setSrc(w.getSrc());
            widget.setStyle(w.getStyle());
            widget.setWidth(w.getWidth());
            widget.setHeight(w.getHeight());
            widget.setWidgetName(w.getWidgetName());
            widgetRepository.save(widget);
        }
    }
    @DeleteMapping("/api/widget/{widgetId}")
    public void deleteWidget(@PathVariable("widgetId")int widgetId){
        Optional<Widget> widgetoptional= widgetRepository.findById(widgetId);
        if(widgetoptional.isPresent()){
            widgetRepository.delete(widgetoptional.get());
        }
    }
}
