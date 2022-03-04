package com.example.waterWarden;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import com.example.waterWarden.repo.UserRepository;
import com.example.waterWarden.model.User;
 
@DataJpaTest
//Don't replace the application default DataSource.
@AutoConfigureTestDatabase(replace = Replace.NONE)
//Don't roll back the transaction after the test
@Rollback(false)
public class UserRepositoryTests {
 
    @Autowired
    private TestEntityManager entityManager;
     
    @Autowired
    private UserRepository repo;
     
    // test methods go below
    @Test
    public void testCreateUser() {
        User user = new User("Ali Veli", "Ali.Veli@brunel.ac.uk","Ali2020");
         
        User savedUser = repo.save(user);
         
        User existUser = entityManager.find(User.class, savedUser.getId());
         
        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
         
    }
}


