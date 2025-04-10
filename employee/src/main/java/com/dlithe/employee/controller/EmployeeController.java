package com.dlithe.employee.controller;

import com.dlithe.employee.entity.Employee;
import com.dlithe.employee.repository.EmployeeRepository;
import com.dlithe.employee.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EmployeeController
{
    private final EmployeeService employeeService;
    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee)
    {
        return employeeService.postEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees()
    {
        return employeeService.getAllEmployees();
    }
    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        try{
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee with id " + id + " deleted", HttpStatus.OK);
        }catch(EntityNotFoundException e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
