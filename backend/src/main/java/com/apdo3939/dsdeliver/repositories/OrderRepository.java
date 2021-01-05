package com.apdo3939.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apdo3939.dsdeliver.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
