import React from "react";
import { shallow } from "enzyme";
import  PearsonUser  from "../Components/PearsonUser";

describe('PearsonUser', () => {

  let PearsonComponent;
  let user;

  beforeEach(() => {

    user = {
      id: 1,
      first_name: "Eve",
      last_name: "Holt",
      avatar: "avatar/image/source",
    };
    PearsonComponent = shallow(<PearsonUser user={user}/>);

  });

  it("Renders an Image", () => {
    expect(
      PearsonComponent.find("img").prop("src")).toEqual("avatar/image/source");
  });

  it("Display first Name and last Name", () => { 
    const display_name = PearsonComponent.find("p.title");
    expect(display_name.text()).toEqual('Eve Holt');

  });

  it("Show delete button", () => {
    expect(PearsonComponent.find("span.delete").text()).toEqual("Delete");
  });
  
  it("Trigger deleteUser action", () => {
    const mockFn = jest.fn();
    
    PearsonComponent.setProps({ deleteUser: mockFn });
    PearsonComponent
      .find("span.delete")
      .simulate("click");   
    expect(mockFn).toHaveBeenCalledTimes(1);
    
  });

});