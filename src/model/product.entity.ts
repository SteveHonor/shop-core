import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @Column({ type: 'varchar' })
  sku: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  categories: string

  @Column({ type: 'varchar' })
  images: string;

  @Column({ type: 'varchar' })
  description: string;
  
  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'integer' })  
  stock: number;
}
