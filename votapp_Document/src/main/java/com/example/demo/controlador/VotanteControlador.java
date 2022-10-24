package com.example.demo.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


import com.example.demo.entidades.Votante;
import com.example.demo.servicios.VotanteService;

@Controller
public class VotanteControlador {
	
	@Autowired
	private VotanteService votanteService;
	
	
	
	@GetMapping("/votapp")
	public String despVotapp() {
		return"/index";
	}
	
	@PostMapping("/saveVotante")
	public String addVotante(@Validated Votante votante) {
		System.out.println("Votante-->"+votante.toString());
		votanteService.save(votante);
		return "redirect:/votapp";
	}
	
	@GetMapping("/registro")
	public String despPrincipal(Model model) {
		model.addAttribute("votante",new Votante());
		return"/registroVotante";
	}
	
	@GetMapping("/btnLiga")
	public String despLiga() {		
		return"/partLiga";
	}
	
	@GetMapping("/btnPacto")
	public String despPacto() {		
		return"/partPacto";
	}
	
	@GetMapping("/btnCentro")
	public String despCentro() {		
		return"/partCentro";
	}
	
	@GetMapping("/btnEquipo")
	public String despEquipo() {		
		return"/partFico";
	}
	
	
	
	
	
	
}
