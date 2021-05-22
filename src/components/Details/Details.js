import React, { useState } from "react";
import {
  Button,
  ScaleFade,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { isEmail, isEmpty } from "../../helpers/validator";
import { FILL_RULES, EMAIL_IN_USE, INVALID_EMAIL } from "./constant";
import { setError } from "./helpers";
import "./styles.css";

const Details = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [rules, setRules] = useState(false);
  const [updates, setUpdates] = useState(false);

  const details = useSelector((state) => state.admin.details);

  const { category } = queryString.parse(location.search);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleZipcode = (e) => setZipcode(e.target.value);
  const handleRules = () => setRules(!rules);
  const handleUpdates = () => setUpdates(!updates);
  const toast = useToast();
  let existingEmail;

  if (details && details.data) {
    existingEmail = details.data.find((data) => data.email === email);
  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(email) || isEmpty(zipcode)) {
      setError(toast, "Empty Required Field", "Please fill all required field");
    } else if (!isEmail(email)) {
      setError(toast, "Invalid Email.", INVALID_EMAIL);
    } else if (existingEmail) {
      setError(toast, "Existing Email.", EMAIL_IN_USE);
    } else if (rules !== true) {
      setError(toast, "Accept Terms.", FILL_RULES);
    } else {
      history.push(
        `/${category}?n=${name}&e=${email}&z=${zipcode}&u=${updates}&r=${rules}`
      );
    }
  };

  return (
    <div>
      <div className="header">
        <div className="round-design">
          <ScaleFade initialScale={0.9} in={true}>
            <div className="detail-container">
              <div>
                <br /> Please fill the below to continue.
              </div>
              <div>
                <div className="base-bottom">
                  <FormControl id="full-name" isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input
                      onChange={handleName}
                      value={name}
                      placeholder="Full Name"
                    />
                  </FormControl>
                </div>
                <div className="base-bottom">
                  <FormControl id="full-name" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      onChange={handleEmail}
                      value={email}
                      type="email"
                      placeholder="Email address"
                    />
                  </FormControl>
                </div>
                <div className="base-bottom">
                  <FormControl id="full-name" isRequired>
                    <FormLabel>Zipcode</FormLabel>
                    <Input
                      onChange={handleZipcode}
                      value={zipcode}
                      isRequired
                      type="number"
                      placeholder="Zipcode"
                    />
                  </FormControl>
                </div>
                <div className="base-bottom">
                  <FormControl id="full-name" isRequired>
                    <Checkbox
                      onChange={handleRules}
                      value={rules}
                      defaultChecked={rules}
                      colorScheme="purple"
                    >
                      I have read and agreed to the rules and regulations
                    </Checkbox>
                  </FormControl>
                </div>
                <div className="base-bottom">
                  <Checkbox
                    onChange={handleUpdates}
                    value={updates}
                    defaultChecked={updates}
                    colorScheme="purple"
                  >
                    I would like to receive future news, coupons and updates.
                  </Checkbox>
                </div>
                <div className="btnCenter">
                  <Button
                    onClick={handleSubmit}
                    height="48px"
                    width="200px"
                    colorScheme="purple"
                    size="lg"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
};

export default Details;
