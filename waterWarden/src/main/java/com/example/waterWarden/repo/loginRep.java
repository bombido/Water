package com.example.waterWarden.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.waterWarden.model.user;

@Repository
public interface loginRep extends JpaRepository<user, String>{
	user findByUnameAndPassword(String username, String password);
	

}
