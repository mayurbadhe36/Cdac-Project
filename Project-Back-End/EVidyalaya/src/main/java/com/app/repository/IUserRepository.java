package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;
import com.app.entities.User;

public interface IUserRepository extends JpaRepository<User, Long> {

	public boolean existsByEmail(String email);

	public User findByEmail(String email);

	public List<User> findByRole(Role role);

}
