package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.User;
import com.app.repository.IUserRepository;

@Service
public class LoginServiceImpl implements ILoginService {

	@Autowired
	IUserRepository userRepo;

	@Override
	public User authenticateUser(String mail, String password) {
		User user = userRepo.findByEmail(mail);
		if (user != null && user.getPassword().equals(password))
			return user;
		return null;
	}

}
