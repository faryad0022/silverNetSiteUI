import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterBlogContentDTO } from 'src/app/_core/data/blogContent/filterBlogContentDTO';
import { BlogGroupDTO } from 'src/app/_core/data/blogGroup/blogGroupDTO';

@Component({
  selector: 'app-blog-search-widget',
  templateUrl: './blog-search-widget.component.html',
})
export class BlogSearchWidgetComponent implements OnInit {
  
  @Input() blogGroups: BlogGroupDTO[];
  @Output() filterBlog = new EventEmitter<FilterBlogContentDTO>();
  filter = new FilterBlogContentDTO([],null,null,true,false,null,null);
  searchForm: FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.searchForm = this.fb.group({
       blogContentList: [{},],
       blogGroupName: [null,],
       title: [null],
       isSelected: [true],
       isDelete: [false],
       viewCount: [null],
       blogGroupId: [null],
    });
  }
  handlefilterBlogsByGroup(blogGroup:BlogGroupDTO){
    this.filter.blogGroupId = blogGroup.id;
    this.filter.blogGroupName = blogGroup.name;
    this.filterBlog.emit(this.filter);
  }
  handleSearch(){

    if(this.searchForm.valid){
      this.filter.title = this.searchForm.controls.title.value;
      this.filterBlog.emit(this.filter);
      }      

    }
    
  }
  

