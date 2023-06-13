import { Cliente } from './../product.model';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  cliente: Cliente = {
    nome: '',
    imgUrl: '',
    
    endereco: {
            logradouro: '',
            numero: null,
            complemento: '',
            cep:'',
            bairro: '',
            cidade: '',
            estado: '',
            pais: ''
        },
    rg: '',
    cpf: '',
    telefone: '',
    email: '',
    
  }
  
  constructor(private ProductService: ProductService,
    private router:Router) {}

  ngOnInit(): void{
  }

  createProduct(): void {
    this.ProductService.create(this.cliente).subscribe(()=>{
        this.ProductService.showMessage('Cliente cadastrado!')
        this.router.navigate(['/products'])

    })  
  }
  cancel(): void {
    this.router.navigate(['/products'])

  }

}
