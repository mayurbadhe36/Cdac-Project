package com.app.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.app.entities.Assignment;
import com.app.entities.AssignmentAnswer;
import com.app.entities.NoticeBoard;
import com.app.entities.TimeTable;
import com.app.entities.User;

public interface IFacultyService {

	public Assignment addAssignment(Assignment assignment, Long facultyId);

	public List<Assignment> getAllAssignment();

	public List<Assignment> getAssignmentByFaculty(Long facultyId);

	public NoticeBoard addNoticeBoard(NoticeBoard notice, Long facultyId);

	public List<NoticeBoard> getAllNoticeBoard();

	public List<User> getAllStudentByRoleStudent();

	public List<TimeTable> getAllTimeTable();

	public List<NoticeBoard> getNoticeBoardByFaculty(Long facultyId);

	public List<TimeTable> getAllTimeTableByFacultyId(Long id);

	public TimeTable addTimeTable(@Valid TimeTable timetable, Long facultyId);

//	public NoticeBoard getNoticeById(Long id);
//
//	public NoticeBoard updateNoticeboard(NoticeBoard notice);
//
//	public boolean deleteNotice(long id);
//
//	public Assignment getAssignmentById(long id);
//
//	public Assignment updateAssignment(Assignment assignment);
//
//	public boolean deleteAssignment(long id);
//
//	public List<AssignmentAnswer> getAllSubmitAnswerByFacultyId(long id);
//
//	public AssignmentAnswer getAssignmentAnswerById(long id);
//
//	public boolean updateGrade(long aid, String grade);
//
//	public String checkGrade(long fid, long aid);
//
//	public User updateProfile(User u);
//
//	public TimeTable addTimeTable(TimeTable timeTable);
//
//	public TimeTable getTimeTableById(long id);

//	public boolean deleteTimeTable(long id);
//
//	public TimeTable updateTimeTable(TimeTable timeTable);
}
