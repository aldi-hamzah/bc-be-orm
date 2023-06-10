const findAll = async (req, res) => {
  try {
    const employees = await req.context.models.employees.findAll();
    return res.send(employees);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employees = await req.context.models.employees.findOne({
      where: { employee_id: req.params.id },
    });
    return res.send(employees);
  } catch (error) {
    return res.send(error);
  }
};

const created = async (req, res) => {
  try {
    const {
      employee_id,
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      salary,
      commission_pct,
      manager_id,
      department_id,
      job_id,
      xemp_id,
    } = req.body;
    const employees = await req.context.models.employees.create({
      employee_id: employee_id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      hire_date: hire_date,
      salary: salary,
      commission_pct: commission_pct,
      manager_id: manager_id,
      department_id: department_id,
      job_id: job_id,
      xemp_id: xemp_id,
    });
    return res.send(employees);
  } catch (error) {
    return res.send(error);
  }
};

const updated = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      salary,
      commission_pct,
      manager_id,
      department_id,
      job_id,
      xemp_id,
    } = req.body;
    const employees = await req.context.models.employees.update(
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        hire_date: hire_date,
        salary: salary,
        commission_pct: commission_pct,
        manager_id: manager_id,
        department_id: department_id,
        job_id: job_id,
        xemp_id: xemp_id,
      },
      {
        returning: true,
        where: {
          employee_id: req.params.id,
        },
      }
    );
    return res.send(employees);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const employees = await req.context.models.employees.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send(`Delete ${employees} row`);
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
