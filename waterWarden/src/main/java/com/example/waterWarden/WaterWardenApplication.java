package com.example.waterWarden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@ServletComponentScan
public class WaterWardenApplication {

	public static void main(String[] args) {
		SpringApplication.run(WaterWardenApplication.class, args);
	}

}
