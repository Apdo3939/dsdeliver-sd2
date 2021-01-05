package com.apdo3939.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.apdo3939.dsdeliver.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	/*List<Order> findAllByOrderByMomentAsc();*/
	
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrdersWithProducts();
	
}
