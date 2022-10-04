enum ErrorField {
  STATUS = "status",
  MESSAGES = "messages",
  MESSAGE = "message",
  LOCATOR = "locator",
}
enum SuccessField {
  DATA = "data",
  NAME = "name",
  LOGO = "logo",
  DOMAIN = "domain",
  STATUS = "status",
  ENTITYID = "entityId",
  IPADDRESS = "ipAddress",
  CONTACTMAIL = "contactMail",
  CONTACTNAME = "contactName",
  EXPIRATIONDATE = "expirationDate",
  ATTRIBUTEVALIDATOR = "attributeValidator",
  IDENTIFICATIONNUMBER = "identificationNumber",
}

export interface IError<T> {
  [ErrorField.STATUS]: string;
  [ErrorField.MESSAGES]: T[];
}

export interface IMessageError {
  [ErrorField.STATUS]: string;
  [ErrorField.MESSAGE]: string;
  [ErrorField.LOCATOR]: string;
}

export interface ISuccess {
  [SuccessField.STATUS]: string;
  [SuccessField.DATA]: IDataStructure[];
}

export interface IDataStructure {
  [SuccessField.ENTITYID]?: number;
  [SuccessField.NAME]?: string;
  [SuccessField.ATTRIBUTEVALIDATOR]?: string;
  [SuccessField.IDENTIFICATIONNUMBER]?: string;
  [SuccessField.EXPIRATIONDATE]?: string;
  [SuccessField.CONTACTNAME]?: string;
  [SuccessField.CONTACTMAIL]?: string;
  [SuccessField.IPADDRESS]?: string;
  [SuccessField.LOGO]?: string;
  [SuccessField.DOMAIN]?: string;
}

export interface IErrorResponse extends IError<IMessageError> {}
