import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';

describe('mapper spec', () => {
  it('should return empty array when it feeds undefined', () => {
    //Arrange
    const Project: apiModel.Project = undefined;
    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(Project);
    //Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
  it('should return empty array when it feeds null', () => {
    //Arrange
    const Project: apiModel.Project = null;
    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(Project);
    //Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
});
