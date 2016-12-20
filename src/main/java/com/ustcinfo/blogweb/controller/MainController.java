package com.ustcinfo.blogweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by zhanghao on 2016/12/17.
 */
@Controller
@RequestMapping("/blog")
public class MainController {

    @RequestMapping(value = "/first")
    public String myFirstWeb() {
        return "index";
    }

    @RequestMapping(value = "/second")
    public String mySecondWeb() {
        return "bootstrap";
    }

    @RequestMapping(value = "/third")
    public String myThirdWeb() {
        return "carousel";
    }
}
