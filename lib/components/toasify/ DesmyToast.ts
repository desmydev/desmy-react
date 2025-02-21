class DesmyToast {
  static context: any;

  static initialize(context: any) {
    DesmyToast.context = context;
  }

  static success(message: string) {
    if (DesmyToast.context) {
      DesmyToast.context.addToast(message, 'success');
    }
  }

  static error(message: string) {
    if (DesmyToast.context) {
      DesmyToast.context.addToast(message, 'error');
    }
  }

  static info(message: string) {
    if (DesmyToast.context) {
      DesmyToast.context.addToast(message, 'info');
    }
  }
}

export { DesmyToast };
