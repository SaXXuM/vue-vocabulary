let object = {
  objectsBySchemaIdGet(instance, schemaId, params) {
    return instance.get("/objects/" + schemaId, {
      params
    });
  }
};

export default object;
