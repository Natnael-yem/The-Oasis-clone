import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';


function AddCabin() {
  return (
    <div>
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    </div>
  );
}

export default AddCabin;
{
  /* //   const [isOpenModal, setIsOpenModal] = useState(false);
  //   return (
  //     <div>
  //       <Button onClick={() => setIsOpenModal((show) => !show)}>
  //         Add new cabin
  //       </Button>
  //       {isOpenModal && (
  //         <Modal onClose={()=>setIsOpenModal(false)}>
  //           <CreateCabinForm onClose={()=>setIsOpenModal(false)}/>
  //         </Modal>
  //       )}
  //     </div>
  //   ); */
}
