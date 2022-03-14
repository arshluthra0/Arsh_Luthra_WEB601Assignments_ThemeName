import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  type: any;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.styleUnderlineBold("")
    
    if(this.type){
      this.styleUnderlineBold('bold');  
    }else{
      this.styleUnderlineBold('underline');  
    }
    
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.styleUnderlineBold('');        
  }

  private styleUnderlineBold(value: string) {  

    if(this.el.nativeElement.classList.contains("tags")){
      this.type = true;
      this.el.nativeElement.style.fontWeight = value;
    }else{
      this.type = false;
      this.el.nativeElement.style.textDecoration = value;
    }
   
  }
}
