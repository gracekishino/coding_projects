#-------------------------------------------
# USCC Headquarter's Instruction Set Architecture
#  System Design:
#   - Four function calculator
#   - Can only operate on numbers stored in registers
#   - Processor receives binary data as 32-bit strings
#   - Returns results to the terminal
#   - Can operate on 10-bit numbers (0 thru 1023)
#   - Results can be negative (5 - 10 = -5)
#  Instruction format:
#   - 32 bit's in length
#   - Binary data will come to the CPU as a string
#   - Registers (32 total on CPU, 0-indexed)
#      - 0 thru 21:  Available for number storage
#        - 0: Constant 0
#      - 22 thru 31: Available for history storage
# +=======+=======+=======+=======+=======+=======+=======+=======+
# | 0: 0  | 1:    | 2:    | 3:    | 4:    | 5:    | 6:    | 7:    |
# +-------+-------+-------+-------+-------+-------+-------+-------+
# | 8:    | 9:    |10:    |11:    |12:    |13:    |14:    |15:    |
# +-------+-------+-------+-------+-------+-------+-------+-------+
# |16:    |17:    |18:    |19:    |20:    |21:    |22: H0 |23: H1 |
# +-------+-------+-------+-------+-------+-------+-------+-------+
# |24: H2 |25: H3 |26: H4 |27: H5 |28: H6 |29: H7 |30: H8 |31: H9 |
# +=======+=======+=======+=======+=======+=======+=======+=======+
#   - Bits 0-5 are OPCODEs
#     - use variable 'opcode' in program
#   - Bits 6-10 & 11-15 are source register locations
#     - use variables 'source_one' and 'source_two' in program
#   - Bits 16-25 are reserved for adding a new value to the registers
#     - use variable 'store' in program
#   - Bits 26-31 are functions
#     - use variable 'function_code' in program
# +--------+----------+-------------------------------------+
# | OPCODE | FUNCTION | Definition                          |
# | 000000 |  100000  | Add two numbers from registers      |
# | 000000 |  100010  | Subtract two numbers from registers |
# | 000000 |  011000  | Multiply two numbers from registers |
# | 000000 |  011010  | Divide two numbers from registers   |
# | 000001 |  000000  | Store value to next register        |
# | 100001 |  000000  | Return previous calculation         |
# +--------+----------+-------------------------------------+

# Your code below here:
class UltraSuperCalculator:
  def __init__(self, name):
    self.name = name
    self.number_registers = [0] * 22
    self.history_registers = [0] * 10
    self.numbers_index = 1
    self.history_index = 0
    self.temp_history_index = 0
    self.user_display = ''
    self.update_display(f"Welcome {name}!")
    return None

  def update_display(self, to_update):
    self.user_display = to_update
    print(to_update)
  
  def store_value_to_register(self, value_to_store):
    if self.numbers_index > 21:
      self.numbers_index = 1
    value_to_store = value_to_store
    self.number_registers[self.numbers_index] = value_to_store
    print(f"{value_to_store} stored in number register {self.numbers_index}")
    self.numbers_index += 1

  def load_value_from_register(self, register_address):
    index = int(register_address,2)
    int_value = int(self.number_registers[index])
    return int_value

  def store_to_history_register(self, result_to_store):
    if self.history_index > 9:
      self.history_index = 0
    self.history_registers[self.history_index] = bin(result_to_store)
    self.history_index += 1
    self.temp_history_index = self.history_index

  def add(self, address_num1, address_num2):
    num1 = self.load_value_from_register(address_num1)
    num2 = self.load_value_from_register(address_num2)
    calculated_value = num1 + num2
    return calculated_value

  def multiply(self, address_num1, address_num2):
    num1 = self.load_value_from_register(address_num1)
    num2 = self.load_value_from_register(address_num2)
    calculated_value = num1 * num2
    return calculated_value

  def subtract(self, address_num1, address_num2):
    num1 = self.load_value_from_register(address_num1)
    num2 = self.load_value_from_register(address_num2)
    calculated_value = num1 - num2
    return calculated_value

  def divide(self, address_num1, address_num2):
    num1 = self.load_value_from_register(address_num1)
    num2 = self.load_value_from_register(address_num2)
    calculated_value = 0
    if num2 != 0:
      calculated_value = num1 / num2
    else:
      print(f"Division by 0 error: {num1}/{num2}.")
    return int(calculated_value)

  def get_last_calculation(self):
    self.temp_history_index-= 1
    last_value = f"The last calculated value was: {self.history_registers[self.temp_history_index]}"
    self.update_display(last_value)

  def binary_reader(self, instruction):
    if len(instruction) != 32:
      print("Invalid Instruction Length")
      return
    opcode = instruction[0:6]
    source_one = instruction[6:11]
    source_two = instruction[11:16]
    store = instruction[16:26]
    function_code = instruction[26:]
    if opcode == '000001':
      self.store_value_to_register(int(store,2))
      return
    elif opcode == '100001':
      self.get_last_calculation()
      return
    elif opcode != '000000':
      self.update_display("Invalid OPCODE")
      return
    result = 0
    if function_code == '100000':
      result = self.add(source_one, source_two) 
    elif function_code == '100010':
      result = self.subtract(source_one, source_two)
    elif function_code == '011000':
      result = self.multiply(source_one, source_two)
    elif function_code == '011010':
      result = self.divide(source_one, source_two)
    else:
      self.update_display("Invalid FUNCTION_CODE")
    self.store_value_to_register(result)
    self.store_to_history_register(result)
    self.update_display("Result: " + str(result))


graceCalculator = UltraSuperCalculator("Grace")

# store 1
graceCalculator.binary_reader('00000100000000000000000001000000')
# store 2
graceCalculator.binary_reader('00000100000000000000000010000000')
# store 3
graceCalculator.binary_reader('00000100000000000000000011000000')
# store 4
graceCalculator.binary_reader('00000100000000000000000100000000')
# store 5
graceCalculator.binary_reader('00000100000000000000000101000000')

# add 3 and 5
graceCalculator.binary_reader('00000000011001010000000000100000')

# subtract 3 and 5
graceCalculator.binary_reader('00000000011001010000000000100010')

# multiply 3 and 4
graceCalculator.binary_reader('00000000011001000000000000011000')

# divide 2 and 2
graceCalculator.binary_reader('00000000010000100000000000011010')


# get last four calculations
graceCalculator.get_last_calculation()
graceCalculator.get_last_calculation()
graceCalculator.get_last_calculation()
graceCalculator.get_last_calculation()

print(f'number_registers: {graceCalculator.number_registers}')
print(f'history_registers: {graceCalculator.history_registers}')
