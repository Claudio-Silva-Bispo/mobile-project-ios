package com.example.picpaysimplificado.domain.user.User;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

// Minha entidade principal ou Model
@Entity(name = "usuarios")

// Gerar o nome da tabela no banco
@Table(name = "usuarios")

// Usando o Lonbok para simplificar a criação dos getters, setters e construtores
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode


public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column(name = "Nome")
    private String nome;

    // para CPF/CNPJ do usuário
    @Column(name = "CPF", unique = true)
    private String CPF;

    @Column(name = "Email", unique = true)
    private String email;

    @Column(name = "Senha")
    private String senha;

   // Saldo do usuário
    @Column(name = "Extrato")
    private BigDecimal extrato;

    @Enumerated(EnumType.STRING)
    private UsuarioTipo userType;
}
