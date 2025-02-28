public class test {
	public static void main(String[] args) {
		System.out.println("hi");
        while (true) {
            try {
                Thread.sleep(500);
                System.out.println("awake after 500 unit of time");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
	}
}
