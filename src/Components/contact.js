export default function Contact() {
  const contact = document.createElement("section");
  contact.classList.add("contact");
  const contactSubHeader = document.createElement("p");
  contactSubHeader.textContent = "reach out";
  contactSubHeader.classList.add("contact__text--subheader");
  const contactHeader = document.createElement("h2");
  contactHeader.setAttribute("style", "white-space: pre;");
  contactHeader.textContent = "a few clicks \r\nand strokes away";
  contactHeader.classList.add("contact__header");

  const contactHeaderText = document.createElement("div");
  contactHeaderText.append(contactSubHeader, contactHeader);
  contactHeaderText.classList.add("contact__header--group");

  const contactForm = document.createElement("div");
  contactForm.classList.add("contact__form");

  const contactNumberHeader = document.createElement("h2");
  contactNumberHeader.textContent = "contact number";
  contactNumberHeader.classList.add("menu__header", "menu__header--form");
  const contactNumber = document.createElement("p");
  contactNumber.classList.add("menu__text", "menu__text--form");
  contactNumber.textContent = "09562201683";

  const contactAddressHeader = document.createElement("h2");
  contactAddressHeader.textContent = "Address";
  contactAddressHeader.classList.add("menu__header", "menu__header--form");
  const contactAddress = document.createElement("p");
  contactAddress.textContent =
    "039 Dona aurora st., brgy. san roque, angono, rizal";
  contactAddress.classList.add("menu__text", "menu__text--form");
  const formAddressMap = document.createElement("iframe");
  formAddressMap.classList.add("menu__form--input--map");
  formAddressMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65073.32872401309!2d120.94213509803116!3d14.596030996227341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1667046937109!5m2!1sen!2sph";

  const contactGroupNumber = document.createElement("div");
  contactGroupNumber.append(contactNumberHeader, contactNumber);
  const contactGroupAddress = document.createElement("div");

  contactGroupAddress.append(
    contactAddressHeader,
    contactAddress,
    formAddressMap
  );

  const contactMessageUsHeader = document.createElement("h2");
  contactMessageUsHeader.classList.add("menu__header", "menu__header--form");
  contactMessageUsHeader.textContent = "Message us";

  const contactGroupMessageUs = document.createElement("div");
  contactGroupMessageUs.classList.add("menu__form--container");
  // Contact Input Row
  //   subject
  const formSubjectLabel = document.createElement("label");
  formSubjectLabel.classList.add("menu__text", "menu__text--form");
  const formSubjectInput = document.createElement("input");
  formSubjectInput.classList.add("menu__form--input");
  formSubjectLabel.for = formSubjectInput;
  formSubjectLabel.textContent = "Subject";
  formSubjectInput.type = "text";

  //   Email
  const formEmailLabel = document.createElement("label");
  formEmailLabel.classList.add("menu__text", "menu__text--form");
  const formEmailInput = document.createElement("input");
  formEmailInput.classList.add("menu__form--input");
  formEmailLabel.for = formSubjectInput;
  formEmailLabel.textContent = "Email";
  formEmailInput.type = "email";

  const formAddressLabel = document.createElement("label");
  formAddressLabel.classList.add("menu__text", "menu__text--form");
  const formAddressInput = document.createElement("textarea");
  formAddressInput.classList.add("menu__form--input", "menu__form--input--add");
  formAddressLabel.for = formSubjectInput;
  formAddressLabel.textContent = "Address";

  //   formAddressInput.type = "text";

  //   Contact Rows
  const formRowSubject = document.createElement("div");
  formRowSubject.classList.add("menu__form--row");
  formRowSubject.append(formSubjectLabel, formSubjectInput);

  const formRowEmail = document.createElement("div");
  formRowEmail.classList.add("menu__form--row");
  formRowEmail.append(formEmailLabel, formEmailInput);

  const formRowAddress = document.createElement("div");
  formRowAddress.classList.add("menu__form--row");
  formRowAddress.append(formAddressLabel, formAddressInput);

  const formSubmitButton = document.createElement("button");
  formSubmitButton.classList.add("hero__button", "hero__button--full");
  formSubmitButton.textContent = "SUBMIT";

  contactGroupMessageUs.append(
    contactMessageUsHeader,
    formRowSubject,
    formRowEmail,
    formRowAddress,
    formSubmitButton
  );
  const contactDetails = document.createElement("div");
  contactDetails.append(contactGroupNumber, contactGroupAddress);
  contactDetails.classList.add("contact__form--details");
  contactForm.append(contactDetails, contactGroupMessageUs);

  contact.append(contactHeaderText, contactForm);

  return contact;
}
