from car import Car
from account import Account


def main():
    car = Car("AMS134", Account("Juan", "JUAN123"))
    print(vars(car))
    print(vars(car.driver))


if __name__ == "__main__":
    main()
