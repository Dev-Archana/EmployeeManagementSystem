package com.dlithe.employee.service;


import com.dlithe.employee.entity.Employee;
import com.dlithe.employee.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.hibernate.action.internal.EntityActionVetoException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    public Employee postEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }
    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }
    public void deleteEmployee(Long id){
        if(!employeeRepository.existsById(id)){
            throw new EntityNotFoundException("Employee with id " + id + " not found");
        }
        employeeRepository.deleteById(id);
    }
}
