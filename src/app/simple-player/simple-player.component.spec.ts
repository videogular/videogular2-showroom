/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SimplePlayerComponent } from "./simple-player.component";

describe('SimplePlayerComponent', () => {
    let component: SimplePlayerComponent;
    let fixture: ComponentFixture<SimplePlayerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SimplePlayerComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimplePlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
