package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AssignmentAnswer;

public interface IAssignmentAnswerRepository extends JpaRepository<AssignmentAnswer, Long> {

//	public AssignmentAnswer findByStudentAndAssignmentId(long uid, long aid);
//
//	public List<AssignmentAnswer> findByFacultyId(Long id);
//
//	public AssignmentAnswer findByFacultyAndId(long uid, long aid);
//
//	public boolean existsByUserIdAndAssignmentId(long uid, long aid);

}
