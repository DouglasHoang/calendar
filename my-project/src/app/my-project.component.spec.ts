import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyProjectAppComponent } from '../app/my-project.component';

beforeEachProviders(() => [MyProjectAppComponent]);

describe('App: MyProject', () => {
  it('should create the app',
      inject([MyProjectAppComponent], (app: MyProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-project works!\'',
      inject([MyProjectAppComponent], (app: MyProjectAppComponent) => {
    expect(app.title).toEqual('my-project works!');
  }));
});
