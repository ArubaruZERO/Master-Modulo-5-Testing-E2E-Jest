import { renderHook } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from './../../models/lookup';
describe('confirmation dialog hook specs', () => {
  it('should return data with initial values and useState method when it calls it', () => {
    //Arrange
    const itemToDelete: Lookup = {
      id: '',
      name: '',
    };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
});
