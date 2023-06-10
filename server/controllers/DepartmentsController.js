const findAll = async (req, res) => {
  try {
    const departments = await req.context.models.departments.findAll();
    return res.send(departments);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const departments = await req.context.models.departments.findOne({
      where: { department_id: req.params.id },
    });
    return res.send(departments);
  } catch (error) {
    res.send(error);
  }
};

const created = async (req, res) => {
  try {
    const { department_id, department_name, location_id, manager_id } =
      req.body;
    const departments = await req.context.models.departments.create({
      department_id: department_id,
      department_name: department_name,
      location_id: location_id,
      manager_id: manager_id,
    });
    return res.send(departments);
  } catch (error) {
    res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const { department_name, location_id, manager_id } = req.body;
    const departments = await req.context.models.departments.update(
      {
        department_name: department_name,
        location_id: location_id,
        manager_id: manager_id,
      },
      {
        returning: true,
        where: { department_id: req.params.id },
      }
    );
    return res.send(departments);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const departments = await req.context.models.departments.destroy({
      where: { department_id: req.params.id },
    });
    return res.send(`Delete ${departments} row`);
  } catch (error) {
    return res.send(error);
  }
};

export default {
  findAll,
  findOne,
  created,
  updated,
  deleted,
};
