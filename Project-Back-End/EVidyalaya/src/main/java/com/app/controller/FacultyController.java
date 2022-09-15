package com.app.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.entities.Assignment;
import com.app.entities.NoticeBoard;
import com.app.entities.TimeTable;
import com.app.entities.User;
import com.app.filehandlingutils.FacultyAssignmentUploadResponse;
import com.app.filehandlingutils.FileDownloadUtil;
import com.app.filehandlingutils.FileUploadUtils;
import com.app.service.IFacultyService;

@RestController
@RequestMapping("/faculty")
@CrossOrigin(origins = "http://localhost:3000")
public class FacultyController {

	@Autowired
	IFacultyService facultyService;

	@PostMapping("/addnoticeboard/{userId}")
	public ResponseEntity<?> addNoticeBoard(@RequestBody @Valid NoticeBoard noticeboard, @PathVariable Long facultyId) {
		try {
			return new ResponseEntity<>(facultyService.addNoticeBoard(noticeboard, facultyId), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/uploadAssignment")
	public ResponseEntity<FacultyAssignmentUploadResponse> uploadFile(@RequestParam("file") MultipartFile multipartFile)
			throws IOException {
		try {
			String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
			long size = multipartFile.getSize();
			String filecode = FileUploadUtils.saveFile(fileName, multipartFile);
			FacultyAssignmentUploadResponse response = new FacultyAssignmentUploadResponse();
			response.setFileName(fileName);
			response.setSize(size);
			response.setDownloadUri("/downloadFile/" + filecode);
			response.setFilecode(filecode);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (RuntimeException e) {
			throw new RuntimeException("Something went wrong");
		}
	}

	@GetMapping("/downloadFile/{fileCode}")
	public ResponseEntity<?> downloadFile(@PathVariable("fileCode") String fileCode) {
		FileDownloadUtil downloadUtil = new FileDownloadUtil();

		Resource resource = null;
		try {
			resource = downloadUtil.getFileAsResource(fileCode);
		} catch (IOException e) {
			return ResponseEntity.internalServerError().build();
		}

		if (resource == null) {
			return new ResponseEntity<>("File not found", HttpStatus.NOT_FOUND);
		}

		String contentType = "application/octet-stream";
		String headerValue = "attachment; filename=\"" + resource.getFilename() + "\"";

		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION, headerValue).body(resource);
	}

	@PostMapping("/addassignment/{facultyId}")
	public ResponseEntity<?> addAssignment(@RequestBody @Valid Assignment assignment, @PathVariable Long facultyId) {
		try {
			return new ResponseEntity<>(facultyService.addAssignment(assignment, facultyId), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/viewnoticeboard/{facultyId}")
	public List<NoticeBoard> getAllNotice(@PathVariable Long facultyId) {
		System.out.println(facultyId);
		return facultyService.getNoticeBoardByFaculty(facultyId);
	}

	@GetMapping("/viewstudent")
	public List<User> getAllStudent() {
		return facultyService.getAllStudentByRoleStudent();
	}

	@GetMapping("/viewtimetable/{facultyId}")
	public List<TimeTable> getAllTimeTable(@PathVariable Long facultyId) {
		System.out.println(facultyId);
		return facultyService.getAllTimeTableByFacultyId(facultyId);
	}

	@GetMapping("/viewassignment/{facultyId}")
	public List<Assignment> getAllAssignmentByFacultyId(@PathVariable Long facultyId) {
		System.out.println(facultyId);
		return facultyService.getAssignmentByFaculty(facultyId);
	}

	@PostMapping("/addtimetable/{userId}")
	public ResponseEntity<?> addTimetableByFacultyId(@RequestBody @Valid TimeTable timetable,
			@PathVariable Long userId) {
		try {
			return new ResponseEntity<>(facultyService.addTimeTable(timetable, userId), HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ApiResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}
}
