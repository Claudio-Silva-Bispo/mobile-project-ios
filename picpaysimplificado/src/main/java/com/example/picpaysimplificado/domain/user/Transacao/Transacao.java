package com.example.picpaysimplificado.domain.user.Transaction;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity(name = "transactions")
@Table(name = "transactions")
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@NoArgsConstructor

public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal acount;



}
