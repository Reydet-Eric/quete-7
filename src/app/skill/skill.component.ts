import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
@Input() nomskill: string | undefined

@Input() logoskill: string | undefined;

@Input() siteskill: string | undefined;
};