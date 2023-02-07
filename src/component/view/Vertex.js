import styled from 'styled-components';
import { TYPE } from '../../constants/Type';

const Name = styled.div``;

const Vertex = ({tree}) => {
  return <Name>{tree.getName()}</Name>;
  // console.log(root.getName());
  // return (
  //   <Name>
  //     {
  //       <>
  //         {root.getName()}
  //         {root.getType() === TYPE.DIR && root.getChild().size > 0
  //           ? root.getChild().map((child) => {
  //               <Vertex root={child} />;
  //             })
  //           : null}
  //       </>
  //     }
  //   </Name>
  // );
};

export default Vertex;
